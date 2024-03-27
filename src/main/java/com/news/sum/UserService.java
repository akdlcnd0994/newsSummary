//package com.news.sum;
//
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.function.Predicate;
//
//@Service
//public class UserService {
//    static List<User> users = new ArrayList<>();
//
//    static {
//        users.add(new User(10, "pjy1", 24));
//        users.add(new User(11, "pjy2", 25));
//        users.add(new User(12, "pjy", 26));
//        users.add(new User(15, "pjy5", 22));
//    }
//
//    public List<User> showUsers(){
//        return users;
//    }
//
//    public User findById(int id){
//        Predicate<? super User> predicate = user -> user.getId() == id;
//        User user = users.stream().filter(predicate).findFirst().get();
//        return user;
//    }
//
//    public void deleteById(int id){
//        Predicate<? super User> predicate = user -> user.getId() == id;
//        users.removeIf(predicate);
//    }
//}
