import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  const { title, content } = req.body;

  // Validate input
  if (!title || !content) {
    return res.status(400).json({ msg: "Title and content are required" });
  }

  try {
    // Create and save post
    const newPost = new Post({
      title,
      content,
      author: req.user.id,
    });

    await newPost.save();

    // Populate author info (e.g., username)
    const populatedPost = await Post.findById(newPost._id).populate(
      "author",
      "username"
    );

    res.status(201).json(populatedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate(
    "author",
    "username"
  );
  res.json(post);
};

export const editPost = async (req, res) => {
  const { title, content } = req.body;
  const postId = req.params.id;

  try {
    // Find the post by ID
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ msg: "Post not found" });

    // Check if the logged-in user is the author
    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized to edit this post" });
    }

    // Update fields
    if (title) post.title = title;
    if (content) post.content = content;

    // Save updated post
    const updatedPost = await post.save();

    // Optionally populate author before returning
    const populatedPost = await Post.findById(updatedPost._id).populate(
      "author",
      "username"
    );

    res.status(200).json(populatedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author.toString() !== req.user.id)
    return res.status(403).json({ msg: "Not allowed" });

  await post.remove();
  res.json({ msg: "Post deleted" });
};
