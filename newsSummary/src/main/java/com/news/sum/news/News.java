package com.news.sum.news;

import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.DynamicInsert;


@Getter
@Entity
@Table(name="NEWS")
public class News {
    int idx;
    String title;
    String content;
    String img;

    public News(int idx, String title, String content, String img, String link, String company, String icon) {
        this.idx = idx;
        this.title = title;
        this.content = content;
        this.img = img;
        this.link = link;
        this.company = company;
        this.icon = icon;
    }

    @Id
    String link;
    String company;
    String icon;

    protected News(){

    }




}
