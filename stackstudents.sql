create database stackstudents;
use stackstudents;
create table students  (
	id INT auto_increment,
    name VARCHAR(255),
    gender VARCHAR(255),
    location VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);
CREATE USER 'students'@'localhost' IDENTIFIED BY '$tudent$';
GRANT ALL ON students.* TO 'students'@'localhost';
insert into students ( id, name , gender, location) values
('1','Moe','male','Ma'),
('2','Andre','male','Ma'),
('3','Rajashree','undefined','Ma'),
('4','Juldany','male','Ma') ,      
('5','Vassif','male','Ma'),        
('6','Kathalina','female','Nj');
