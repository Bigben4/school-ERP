use schoolerp;
go

create table User_table (
     User_id int Not null PRIMARY KEY,
     first_name varchar(255),
     last_name varchar(255),
     Email varchar(255),
     Renter_Password varchar(10),
     Password varchar(10),
     Role varchar(255),
     Created_at varchar(255)
);

create table Student_table (
     Student_id int not null primary key,
     User_id int not null foreign key references user_table(User_id),
     First_name varchar(255),
     Last_name varchar(255),
     Matricule int not null,
     Department varchar(255),
     Level varchar(255),
     Phone int,
     Address varchar(255)
);

create table Teacher_table (
      Teacher_id int not null primary key,
      User_id int not null foreign key references user_table(User_id),
      First_Name varchar(255),
      Last_name Varchar(255),
      Department varchar(255) 
);

create table Courses_table (
      Course_id int not null primary key,
      Course_name varchar(255),
      Credits varchar(255),
      Scores int not null,
      grade varchar(255),
      Semester varchar(255),
      Teacher_id int foreign key references Teacher_table(Teacher_id)
);

create table Result_table (
      Result_id int not null primary key,
      Student_id int foreign key references Student_table(student_id),
      Course_id int foreign key references Courses_table(Course_id),
      Scores int not null,
      Grade varchar(255),
      Semester Varchar(255),
);

create table Payment_table (
      Payment_id int not null primary key,
      student_id int not null foreign key references Student_table(Student_id),
      Amount int not null,
      Date Date,
      Status Varchar(255)
);

create table Annoucement_table(
      Annoucement_id int not null primary key,
      Student_id int foreign key references Student_table(Student_id),
      Title varchar(255),
      Message varchar(max)
);