require('YZGUserSettingViewController,YZGUserManager,NSURL,NSString,UIImage,UIImageView,UIImageView+WebCache');
defineClass('YZGUserSettingViewController', {
            getUserInformation: function() {
            
            self.user = YZGUserManager.user(); // 获取用户信息
            

            
            var imgStr = self.user.headImage();
           
            var imgString = imgStr.stringByAddingPercentEscapesUsingEncoding(4);

            var imgUrl = NSURL.URLWithString(imgString);

            var image = UIImage.imageNamed("user_img");
            
            //用户头像
            self.tableHeadView().userHeadImg().sd__setImageWithURL_placeholderImage(imgUrl, image);
            
            
            var userGender = self.user.sex() == 0 ? "男" : "女";
            
            //个人简介
            var userIntro = self.user.remark() == null ? "未设置" : "详情";
            
            //个人名称
            var userlogno = self.user.userlogno() == null ? "未设置" : self.user.userlogno();
            
            self.setCellDetailArray([userlogno, userGender, userIntro, ""]);
            
            self.userTableView().reloadData();
            },
            
            });
