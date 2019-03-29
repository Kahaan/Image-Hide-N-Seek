# Image-Hide-N-Seek

Image-hide-n-seek is a portfolio showcase web application. It's a full-stack app built using a `Ruby on Rails` backend, `PostgreSQL` database, and `React/Redux` front-end architecture.

The idea behind the app is to create a fun introduction for users to the world of digital steganography (the encryption of files (images in this case) with hidden data). Simply put, users can hide large amounts of text in images without altering the appearance to the human eye.

# Technologies Used

## Backend

- Ruby On Rails, PostgreSQL, Heroku, AWS S3

<img src="https://user-images.githubusercontent.com/26920351/36052369-45a5788a-0da2-11e8-8058-8ef5c98c759c.jpeg" height="50"> <img src="https://user-images.githubusercontent.com/26920351/36052411-766d6d88-0da2-11e8-8585-8fe14190f03b.png" height="50"> <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461122387heroku-logo.jpg" height="45"><img src="https://www.pentoz.com/wp-content/uploads/2018/12/Amazon-Web-Services.png" height=50>

## Frontend

- React/Redux, HTML5, CSS3/SCSS, npm, webpack

<img src="https://user-images.githubusercontent.com/26920351/36052718-a5709848-0da3-11e8-8a16-bf47966d3f63.png" height="45"> <img src="https://user-images.githubusercontent.com/26920351/36052733-b59ab8f2-0da3-11e8-941b-2afc80a4219e.png" height="40">
<img src="https://user-images.githubusercontent.com/26920351/36052477-a6e7e416-0da2-11e8-813a-1ee556d4d8b0.png" height="50"> <img src="https://user-images.githubusercontent.com/26920351/36052488-b2fb00b2-0da2-11e8-995b-aeac3b9e68bb.png" height="50">

# Features & Implementation

1. **Secure Auth:** Using BCrypt for password-salting and hashing, Users can Sign up, Login/demo-login, or Log out

   <p align="left">
    <img src="http://g.recordit.co/eAup4HpFLh.gif" width="500" >
   </p>

2. **Image uploads:** Users can upload images to s3
3. **Image encryption:** Photos can be encoded with text messages that are hidden into the pixels
4. **Decrypting Images:** Users can decode images to retrieve hidden messages

   <p align="left">
    <img src="http://g.recordit.co/ikYJVzx78v.gif" width="500" >
   </p>

5. **Comments:** Users can comment on posts
6. Image hosting on AWS

## Database Schema

### Users

---

| Column Name     | Data Type | Details                   |
| --------------- | --------- | ------------------------- |
| id              | Integer   | primary key, not null     |
| username        | String    | not null, indexed, unique |
| password_digest | String    | not null ,indexed, unique |
| session_token   | String    | not null, indexed, unique |

### Posts

---

| Column Name        | Data Type | Details               |
| ------------------ | --------- | --------------------- |
| id                 | Integer   | primary key, not null |
| user_id            | Integer   | not null, foreign key |
| body               | String    |                       |
| image_file_name    | String    | not null              |
| image_content_type | String    | not null              |
| image_file_size    | Integer   | not null              |

### Comments

---

| Column Name | Data Type | Details               |
| ----------- | --------- | --------------------- |
| id          | Integer   | primary key, not null |
| user_id     | Integer   | not null, foreign key |
| post_id     | Integer   | not null, foreign key |
| body        | String    |

---

### Custom Routes for encrypting Images

---

- `patch 'posts/:id/encrypt', to: 'pages#encrypt', as: 'encrypt_image'`
- `get 'posts/:id/decrypt', to: 'pages#decrypt', as: 'decrypt_image', :defaults => { format: :json }`

---

## Future Features
