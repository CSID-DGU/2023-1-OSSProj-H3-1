-- 학수번호로따져야하는부분: 공교,학기,전공(의생명만)(캡스톤),복수1



-- 공교
create table gg(
    gg_code varchar2(7 char) primary key,
    gg_title varchar2(40 char) not null,
    gg_credit number(1) not null
);
insert into gg values('code', 'title', 0, 'area');
select * from gg;



-- 학기
create table hg(
    hg_code varchar2(7 char) primary key,
    hg_title varchar2(40 char) not null,
    hg_credit number(1) not null
);
insert into hg values('code', 'title', 0, 'area');
select * from hg;



-- 전공(의생명만)(캡스톤)
create table jg(
    jg_code varchar2(7 char) primary key,
    jg_title varchar2(40 char) not null,
    jg_credit number(1) not null,
    jg_area varchar2(2 char) not null
);
insert into jg values('code', 'title', 0, 'area');
select * from jg;



-- 복수1
create table bs(
    bs_code varchar2(7 char) primary key,
    bs_title varchar2(40 char) not null,
    bs_credit number(1) not null,
    bs_required char(1) not null
);
insert into bs1 values('code', 'title', 0, 0);
insert into bs1 values('code', 'title', 0, 1);
select * from bs1;



-- 졸업요건
create table gradrequ(
    educationyear number(4) not null,
    major varchar2(10char) not null,
    major_double varchar2(10char) not null,
    gg_credit number(2) not null,
    hg_count number(1) not null,
    jg_credit number(2) not null,
    jg_GPA number(1) not null,
    bs_credit number(2) not null,
    bs_GPA number(1) not null,
    total_credit number(3) not null
);
-- 일본10(21)&융소22
insert into gradrequ values('jpn10', 'ssc22', 29, 2, 36, 2.0, 36, 2.0, 130);
-- 영어16(21)&융소22
insert into gradrequ values('eng16', 'ssc22', 29, 2, 36, 2.0, 36, 2.0, 130);
-- 의생18(21)&융소22
insert into gradrequ values('mbt18', 'ssc22', 29, 4, 36, 2.0, 36, 2.0, 130);
select * from gradrequ;
