# Blog Server - Node.js

This project is a blog server that built by Express.js

## Getting Started

git clone the project

### Prerequisites

MySQL, Redis, Nginx

### How to run the project

npm run dev

### Front-end 

Front-end page will be uploaded soon.

### Mysql

Run the following sql script
```
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` longtext NOT NULL,
  `createdtime` bigint NOT NULL,
  `author` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

```
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

```
insert into users (id,username,password,firstname,lastname) values ('1','admin','admin','','')
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
