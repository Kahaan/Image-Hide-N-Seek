# Table of Contents

- [Introduction ](#image-hide-n-seek)
- [How To Use ](#how-to-use)
- [Technologies Used ](#technologies-used)
- [Features and Implementation ](#features-and-implementation)
- [Future ](#future-features)

# Image-Hide-N-Seek

Would you believe me if I told you that you could encrypt a thumb size image of the Mona Lisa with up to 16,000 words, and that the picture wouldn't look any different to the human eye?

This sort of image encryption (steganography) is commonly used amongst members of the intelligence community to mask communications in plain sight and can be notoriously tricky to implement correctly (but also quite fun). The custom software I have written here breaks an image down to its pixels and hides a piece of a given secret message in each of those pixels such that the appearance of the image when put together isn't altered. The goal of the app is to create a fun introduction for users to the world of digital steganography.

# How To Use

- Log in or Sign up for a new account
- Uploads image of choice
- Navigate to image and enter text to encode image with
- Click the decode button and wait while the app reals the images secrets
- Comment on other users uploaded images and

# Technologies Used

Image-hide-n-seek is a full-stack web application built using a `Ruby on Rails` backend, `PostgreSQL` database, and `React/Redux` front-end architecture.

## Backend

- Ruby On Rails, PostgreSQL, Heroku, AWS S3

<img src="https://user-images.githubusercontent.com/26920351/36052369-45a5788a-0da2-11e8-8058-8ef5c98c759c.jpeg" height="50"> <img src="https://user-images.githubusercontent.com/26920351/36052411-766d6d88-0da2-11e8-8585-8fe14190f03b.png" height="50"> <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461122387heroku-logo.jpg" height="45"><img src="https://www.pentoz.com/wp-content/uploads/2018/12/Amazon-Web-Services.png" height=50>

## Frontend

- React/Redux, HTML5, CSS3/SCSS, npm, webpack

<img src="https://user-images.githubusercontent.com/26920351/36052718-a5709848-0da3-11e8-8a16-bf47966d3f63.png" height="45"> <img src="https://user-images.githubusercontent.com/26920351/36052733-b59ab8f2-0da3-11e8-941b-2afc80a4219e.png" height="40">
<img src="https://user-images.githubusercontent.com/26920351/36052477-a6e7e416-0da2-11e8-813a-1ee556d4d8b0.png" height="50"> <img src="https://user-images.githubusercontent.com/26920351/36052488-b2fb00b2-0da2-11e8-995b-aeac3b9e68bb.png" height="50">

# Features and Implementation

1. **Secure Auth:** Using BCrypt for password-salting and hashing, Users can Sign up, Login/demo-login, or Log out

   <p align="left">
    <img src="http://g.recordit.co/eAup4HpFLh.gif" width="500" >
   </p>

2. **Image uploads:** Users can upload images to AWS s3
3. **Image encryption:** Photos can be encoded with text messages that are hidden into the pixels
4. **Decrypting Images:** Users can decode images to retrieve hidden messages

   <p align="left">
    <img src="http://g.recordit.co/ikYJVzx78v.gif" width="500" >
   </p>

5. **Comments:** Users can comment on posts

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

### Custom Routes for encrypting Images

- `patch 'posts/:id/encrypt', to: 'pages#encrypt', as: 'encrypt_image'`
- `get 'posts/:id/decrypt', to: 'pages#decrypt', as: 'decrypt_image', :defaults => { format: :json }`

## Future Features

- **Searching Posts by caption:** Allow users to search for posts by keyword
- **Encrypting Images with other Images:** Allow users to hide images within other images
- **Encryption of JPEG files:** Refactor encryption logic to allow for jpeg files in addition to png
