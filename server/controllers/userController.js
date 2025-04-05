// Sample user controller with basic CRUD operations

// Get all users
exports.getUsers = (req, res) => {
  // Mock data - in a real app, this would come from a database
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
  ];
  
  res.json({ users });
};

// Get a single user by ID
exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  
  // Mock data lookup - in a real app, this would be a database query
  const user = { id: userId, name: `User ${userId}` };
  
  res.json({ user });
};

// Create a new user
exports.createUser = (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  
  // In a real app, you would save to a database here
  const newUser = { 
    id: Math.floor(Math.random() * 1000), 
    name 
  };
  
  res.status(201).json({ 
    message: 'User created successfully',
    user: newUser
  });
}; 