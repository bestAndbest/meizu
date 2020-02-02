/*
Navicat MySQL Data Transfer

Source Server         : 本地SQL
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : meizu

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-10-11 14:29:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '123456');
INSERT INTO `user` VALUES ('2', 'liu', '123456789');
INSERT INTO `user` VALUES ('5', 'hh', '896623gvh');
INSERT INTO `user` VALUES ('7', 'lala', '142999');
INSERT INTO `user` VALUES ('8', 'haha', '999999');
INSERT INTO `user` VALUES ('9', 'sadf', '111111');
INSERT INTO `user` VALUES ('10', 'lifang', '666666');
INSERT INTO `user` VALUES ('11', 'ewgrts', '1234123');
INSERT INTO `user` VALUES ('12', 'yuan', '123456');
INSERT INTO `user` VALUES ('13', 'aasssw', '123456');
