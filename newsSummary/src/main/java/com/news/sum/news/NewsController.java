package com.news.sum.news;

import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NewsController {
    @Autowired
    NewsRepository nr;

    @GetMapping("/news/{idx}")
    public List<News> newsReader(@PathVariable int idx){
        return nr.findByidx(idx);
    }
}