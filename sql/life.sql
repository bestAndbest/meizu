/*
Navicat MySQL Data Transfer

Source Server         : test1
Source Server Version : 50635
Source Host           : localhost:3306
Source Database       : museum

Target Server Type    : MYSQL
Target Server Version : 50635
File Encoding         : 65001

Date: 2019-10-09 10:12:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `life`
-- ----------------------------
DROP TABLE IF EXISTS `life`;
CREATE TABLE `life` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `info` varchar(100) DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  `youhuicom` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of life
-- ----------------------------
INSERT INTO `life` VALUES ('1', '魅族 魅族极简都市双肩包', 'https://fms.res.meizu.com/dms/2019/05/31/4e83c58c-d845-417a-9cfb-001be3cf1289.jpg', '650D高耐磨牛津布 大容量多功能收纳', '179', null);
INSERT INTO `life` VALUES ('2', 'Pandaer readnap T恤', 'https://openfile.meizu.com/group1/M00/07/66/Cgbj0V1mIcGAfsr1AAyHfC16kLQ799.png', '潮趣设计 | 优质纯棉德国织造 | 亲肤舒适', '199', null);
INSERT INTO `life` VALUES ('3', '魅族星球探索 鼠标垫', 'https://openfile.meizu.com/group1/M00/07/41/Cgbj0VzvODSALJ3OAA3y2fvxTuA532.png', '星球无限 追求不止', '69', null);
INSERT INTO `life` VALUES ('4', '魅族星球探索 帆布袋', 'https://openfile.meizu.com/group1/M00/07/2A/Cgbj0FzvOLqASrUfAAksP05vyhs545.png', '星球无限 追求不止', '69', null);
INSERT INTO `life` VALUES ('5', 'J-BELT', 'https://fms.res.meizu.com/dms/2019/04/23/5c9e0f3b-2c17-4578-825b-7a138fc5127f.jpg', 'J.Wong Design 无级舒适', '999', null);
INSERT INTO `life` VALUES ('6', '魅族路由器 极速版', 'https://storeimg.meizu.com/product/1465698264-58364.jpg', '魅族路由器 极速版\r\n天生不凡 快狠稳', '99', '特惠');
INSERT INTO `life` VALUES ('7', '魅族 Mini 线控自拍杆', 'https://openfile.meizu.com/group1/M00/01/3A/CnQOjVjJ-m2AQ1LxAAE3Ze4d72s837.png', '小巧圆润 TPE线材', '59', null);
INSERT INTO `life` VALUES ('8', 'Everyday 乐游系列 酷 MA 萌定制版', 'https://openfile.meizu.com/group1/M00/03/59/Cgbj0Vqwv3SAKEs9AAeZO9uMlbg447.png', '萌友为伴，为出行添点乐趣', '599', null);
