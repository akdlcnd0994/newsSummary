package com.news.sum.news;

import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class NewsController {
    @Autowired
    NewsRepository nr;

    @GetMapping("/news/{idx}")
    public List<News> newsReader(@PathVariable int idx){
        if(idx==10){
            //7~18
            return nr.findByidxBetween(7,18);
        }
        return nr.findByidx(idx);
    }
}
