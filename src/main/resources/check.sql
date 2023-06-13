-- �м���ȣ�ε������ϴºκ�: ����,�б�,����(�ǻ���)(ĸ����),����1



-- ����
create table gg(
    gg_code varchar2(7 char) primary key,
    gg_title varchar2(40 char) not null,
    gg_credit number(1) not null
);
insert into gg values('code', 'title', 0, 'area');
select * from gg;



-- �б�
create table hg(
    hg_code varchar2(7 char) primary key,
    hg_title varchar2(40 char) not null,
    hg_credit number(1) not null
);
insert into hg values('code', 'title', 0, 'area');
select * from hg;



-- ����(�ǻ���)(ĸ����)
create table jg(
    jg_code varchar2(7 char) primary key,
    jg_title varchar2(40 char) not null,
    jg_credit number(1) not null,
    jg_area varchar2(2 char) not null
);
insert into jg values('code', 'title', 0, 'area');
select * from jg;



-- ����1
create table bs1(
    bs1_code varchar2(7 char) primary key,
    bs1_title varchar2(40 char) not null,
    bs1_credit number(1) not null,
    bs1_required char(1) not null
);
insert into bs1 values('code', 'title', 0, 0);
insert into bs1 values('code', 'title', 0, 1);
select * from bs1;



-- �������
create table gradrequ(
    major varchar2(10char) primary key,
    major_double varchar2(10char) not null,
    credits_gg number(2) not null,
    credits_hg number(1) not null,
    credits_jg number(2) not null,
    credits_bs number(2) not null,
    credits_total number(3) not null
);
-- �Ϻ�21&����22
insert into gradrequ values('jpn21', 'ssc22', 29, 2, 36, 36, 130);
-- ����21&����22
insert into gradrequ values('eng21', 'ssc22', 29, 2, 36, 36, 130);
-- �ǻ�21&����22
insert into gradrequ values('mbt21', 'ssc22', 29, 4, 36, 36, 130);
select * from gradrequ;
