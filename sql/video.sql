/*
Navicat MySQL Data Transfer

Source Server         : 本地SQL
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : meizu

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-10-11 14:30:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `video`
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `posterurl` varchar(255) DEFAULT NULL,
  `tittle` varchar(255) DEFAULT NULL,
  `videourl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES ('1', 'https://fms.res.meizu.com/dms/2019/08/28/860646ff-bb80-43cc-b6ff-192b7ac6ccf1.jpg', '让热爱 更澎湃：魅族 16s Pro 手机', 'https://cimg2.res.meizu.com/www/201908/16s pro feature视频16比9_1.mp4');
INSERT INTO `video` VALUES ('2', 'https://fms.res.meizu.com/dms/2019/04/23/ffedd682-1daa-41be-b1a8-ee769d35ff56.jpg', '时刻伴你左右：POP2 真无线蓝牙耳机', 'https://cimg2.res.meizu.com/www/201904/pop2.mp4');
INSERT INTO `video` VALUES ('3', 'https://fms.res.meizu.com/dms/2019/05/30/fca78a73-dca5-4476-a004-412e868f8726.jpg', '极边全面屏 三摄长续航：魅族 16Xs 手机', 'https://cimg2.res.meizu.com/www/201905/16xs.mp4');
INSERT INTO `video` VALUES ('4', 'https://fms.res.meizu.com/dms/2019/04/23/1008d8c3-fb6a-44c9-a393-1d5d7a595201.jpg', '追求不止 只因热爱：魅族 16s 旗舰手机', 'https://cimg2.res.meizu.com/www/201905/16s-liangxiang.mp4');
INSERT INTO `video` VALUES ('5', 'https://fms.res.meizu.com/dms/2018/11/27/45e511b0-51ff-46a9-93ed-83b2ec522d24.jpg', 'Flyme 7', 'https://www3.res.meizu.com/video/Flyme7_896X512_2.mp4');
INSERT INTO `video` VALUES ('6', 'https://fms.res.meizu.com/dms/2018/11/27/3b75dc9f-7af7-4104-94fa-a384252ef78c.jpg', '安全家庭', 'https://www3.res.meizu.com/video/安全家庭视频_1.mp4');
INSERT INTO `video` VALUES ('7', 'https://fms.res.meizu.com/dms/2018/11/27/05560a91-cabe-48c5-9bd9-c8dd52a2ecb7.jpg', '魅族互娱 MGC 探险嘉年华', 'https://www3.res.meizu.com/video/天空之城_2.mp4');
INSERT INTO `video` VALUES ('8', 'https://fms.res.meizu.com/dms/2018/11/27/86e36692-1cdb-4906-a5df-7d8bcafe9ebe.jpg', '魅族 X8 游戏性能测试', 'https://www3.res.meizu.com/video/魅族王者1024.mp4');
