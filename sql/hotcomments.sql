/*
Navicat MySQL Data Transfer

Source Server         : 本地SQL
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : meizu

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-10-11 14:29:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `hotcomments`
-- ----------------------------
DROP TABLE IF EXISTS `hotcomments`;
CREATE TABLE `hotcomments` (
  `id` int(80) NOT NULL AUTO_INCREMENT,
  `authorpic` varchar(255) DEFAULT NULL,
  `tittle` varchar(255) DEFAULT NULL,
  `username` varchar(80) DEFAULT NULL,
  `fangwenliang` varchar(80) DEFAULT NULL,
  `comment` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hotcomments
-- ----------------------------
INSERT INTO `hotcomments` VALUES ('1', 'https://image-res.mzres.com/img/download/uc/13/04/28/90/00/1304289/w100h100?t=1569813001', 'FLYME ｜小窗模式2.0设计历程', '卓岳', '3805', '161');
INSERT INTO `hotcomments` VALUES ('2', 'https://image-res.mzres.com/img/download/uc/55/24/36/40/00/5524364/w100h100?t=1569813001', '七夕神秘礼物收到了，拉来媳妇当模特', '陈浩男999', '4987', '233');
INSERT INTO `hotcomments` VALUES ('3', 'https://image-res.mzres.com/img/download/uc/59/99/00/40/00/5999004/w100h100?t=1569813001', '线下购机结束', '啊_永', '2928', '151');
INSERT INTO `hotcomments` VALUES ('4', 'https://image-res.mzres.com/img/download/uc/94/70/92/50/00/9470925/w100h100?t=1569813001', '今天去医院办事遇到个用魅族的，好难得呀', 'woay', '3553', '104');
INSERT INTO `hotcomments` VALUES ('5', 'https://image-res.mzres.com/img/download/uc/84/28/54/20/00/8428542/w100h100?t=1569813001', '请高手把这个70做成息屏显示图', '我要美妹', '3175', '43');
INSERT INTO `hotcomments` VALUES ('6', 'https://image-res.mzres.com/img/download/uc/16/05/30/43/30/160530433/w100h100?t=1569813001', '想支持一波小厂，觉得友商的也还可以', '高登高', '2033', '87');
INSERT INTO `hotcomments` VALUES ('7', 'https://image-res.mzres.com/img/download/uc/59/99/00/40/00/5999004/w100h100?t=1569814201', '谈天说地每日签到帖，2019年09月30日星期一', '红色法拉利32', '808', '568');
INSERT INTO `hotcomments` VALUES ('8', 'https://image-res.mzres.com/img/download/uc/59/99/00/40/00/5999004/w100h100?t=1569814201', '16th plus太完美了', '老王家豆豆', '5121', '160');
INSERT INTO `hotcomments` VALUES ('9', 'https://image-res.mzres.com/img/download/uc/59/99/00/40/00/5999004/w100h100?t=1569814201', '线下购机结束', '啊_永', '2998', '151');
INSERT INTO `hotcomments` VALUES ('10', 'https://image-res.mzres.com/img/download/uc/59/99/00/40/00/5999004/w100h100?t=1569814201', '看看小米系统的新功能', '用户576140844', '4364', '55');
INSERT INTO `hotcomments` VALUES ('11', 'https://image-res.mzres.com/img/download/uc/59/99/00/40/00/5999004/w100h100?t=1569814201', '办公室7台手机3个苹果1个华为，说说你们的。', '老歌传情', '1661', '114');
INSERT INTO `hotcomments` VALUES ('12', 'https://image-res.mzres.com/img/download/uc/59/99/00/40/00/5999004/w100h100?t=1569814201', '捡了一块iPhone se，手里16x它突然不香了', 'Zhangheng16x', '2700', '37');
