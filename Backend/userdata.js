const express = require('express');
const cors = require('cors');
// const mysql = require('mysql2');
const mysql=require('mysql');
const bodyParser = require('body-parser'); 
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const secretKey = '2344';
const multer = require('multer');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Database Connectivity
const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:"",
  database:"practice"
});

con.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});


// Signup

app.post("/Signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);

    const q = "INSERT INTO signupdetail(`Fullname`,`Username`, `Email`, `Password`, `Address`, `City`, `Pincode`) VALUES (?,?,?,?,?,?,?)";
    const values = [
      req.body.Fullname,
      req.body.Username,
      req.body.Email,
      // req.body.Password,
      hashedPassword, 
      req.body.Address,
      req.body.City,
      req.body.Pincode,
    ];

    con.query(q, values, (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ result: "Fail", message: "Internal Server Error" });
  }
});


// Login
app.post('/Login', async (req, res) => {
  const { email, password } = req.body;
 
  const sql = 'SELECT * FROM signupdetail WHERE Email = ?';
  con.query(sql, [email], async (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (data.length > 0) {
  
      console.log('data[0].Password:',data[0].Password);
      const passwordMatch = await bcrypt.compare(password, data[0].Password);
      console.log('passwordMatch:',passwordMatch);
      

      if (passwordMatch) {
        const id = data[0].cust_id;
        const token = jwt.sign({ id }, secretKey, { expiresIn: '12h' });

        return res.json({ login: true, token ,username: data[0].Fullname});
      } else {
        return res.json({ login: false, message: 'Incorrect password' });
      }
    } else {
      return res.json({ login: false, message: 'User not found' });
    }
  });
});




//Uploading Image in Admin Panel
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Posting Product Data in Admin Panel
app.post("/ProductForm", upload.single('ProductImage'), (req, res) => {

  console.log('Request Body:', req.body);  
  console.log('Uploaded File:', req.file); 
  const {
    ProductName,
    ProductPrice
  } = req.body;

  console.log('Uploaded File:', req.file);

  const ProductImg = req.file ? req.file.filename : '';

  const q = `
    INSERT INTO productdetail (product_name, product_price, Image) 
    VALUES (?, ?, ?)
  `;

  const values = [
    ProductName,
    ProductPrice,
    ProductImg,
  ];

  con.query(q, values, (err, data) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.json(data);
  });
});




// Fetching Product Data in Admin Panel
app.get('/products', (req, res) => {
let sortOrder = '';

if (req.query.sort === 'alphabetical') {
  sortOrder = ' ORDER BY product_name ASC';
} else if (req.query.sort === 'numerical') {
  sortOrder = ' ORDER BY product_price ASC';
}

const query = `SELECT * FROM productdetail${sortOrder}`;

con.query(query, (error, results) => {
  if (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
    return;
  }
  res.json(results);
});
});


// Fetching Product Image in Admin Panel
app.get('/product/image/:id', (req, res) => {
const productId = req.params.id;
con.query('SELECT Image FROM productdetail WHERE product_id = ?', [productId], (error, results) => {
  if (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
    return;
  }
  const image = results[0].Image;
  res.contentType('image/jpeg');
  res.sendFile(`${__dirname}/uploads/${image}`);
});
});


//Deleting Product Data in Admin Panel
app.delete('/products/:id', (req, res) => {
const productId = req.params.id;

const query = 'DELETE FROM productdetail WHERE product_id = ?';

con.query(query, [productId], (error, results) => {
  if (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  return res.json({ message: 'Product deleted successfully' });
});
});


// Updating Product Information in Admin Panel

app.put('/upproducts/:id', (req, res) => {
  const productId = req.params.id;
  const { product_name, product_price } = req.body;

  const query = 'UPDATE productdetail SET product_name = ?, product_price = ? WHERE product_id = ?';

  con.query(query, [product_name, product_price, productId], (error, results) => {
    if (error) {
      console.error('Error updating product:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.json({ message: 'Product updated successfully' });
  });
});


// Displaying User Data in Admin Panel
app.get('/users', (req, res) => {
  let query = 'SELECT * FROM signupdetail';

  if (req.query.sortBy) {
    const { sortBy } = req.query;
   
    if (sortBy === 'Alphabetical') {
      query += ' ORDER BY Fullname';
    } else if (sortBy === 'NumericalQuantity') {
      query += ' ORDER BY Pincode';
    }
  }

  con.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal Server Error');
    }

    res.json(results);
  });
});

//Search Query for User data in Admin Panel
app.get('/usersearch', async (req, res) => {
  const searchTerm = req.query.q;

  try {
    const query = 'SELECT * FROM signupdetail WHERE Fullname LIKE ?';
    const searchValue = `%${searchTerm}%`;

    con.query(query, [searchValue], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      res.json(results);
    });
  } catch (error) {
    console.error('Error executing search query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Fetching Total Count of Users in Admin Panel
app.get('/totalUsers', (req, res) => {
  con.query('SELECT COUNT(*) as totalUsers FROM signupdetail', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ totalUsers: results[0].totalUsers });
    }
  });
});


app.listen(5000); 
