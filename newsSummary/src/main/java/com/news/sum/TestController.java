//package com.news.sum;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//public class TestController {
//    @Autowired
//    UserService us;
//    UserRepository ur;
//
//    @GetMapping("/test")
//    public String test(){
//        return "hello world!";
//    }
//
//    @GetMapping("/users")
//    public List<User> test2(){
//        return us.showUsers();
//    }
//
//    @GetMapping("/users/{id}")
//    public User test3(@PathVariable int id){
//        return us.findById(id);
//    }
//
//    @DeleteMapping("/users/{id}")
//    public void test4(@PathVariable int id){
//        us.deleteById(id);
//    }
//
//
//}
