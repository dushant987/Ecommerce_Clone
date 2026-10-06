const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../data/users");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// POST /api/auth/register
router.post("/register", async (req, res) => {
    const { name, email, password, address } = req.body;

    if (!name || !email || !password || !address)
        return res.status(400).json({ message: "All fields are required" });

    if (users.find((u) => u.email === email))
        return res.status(409).json({ message: "Email already in use" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: Date.now().toString(), name, email, password: hashedPassword, address };
    users.push(user);

    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email, address: user.address } });
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ message: "Email and password are required" });

    const user = users.find((u) => u.email === email);
    if (!user)
        return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

// GET /api/auth/me  — verify token and return user info
router.get("/me", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
        return res.status(401).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ user: { id: decoded.id, name: decoded.name, email: decoded.email } });
    } catch {
        res.status(401).json({ message: "Invalid or expired token" });
    }
});

module.exports = router;
