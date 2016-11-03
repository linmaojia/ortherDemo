require('YZGUserSettingViewController,YZGUserManager,NSURL,UIImage,UIImageView+WebCache');
defineClass('YZGUserSettingViewController', {
            getUserInformation: function() {
            
            _user = YZGUserManager.user(); // 获取用户信息
            
         
            self.tableHeadView().userHeadImg().sd_setImageWithURL_placeholderImage(NSURL.URLWithString(_user.headImage().stringByAddingPercentEscapesUsingEncoding(NSUTF8StringEncoding)), UIImage.imageNamed("user_img"));
           
            var userGender = _user.sex() == 0 ? "男" : "女";
            
            //个人简介
            var userIntro = _user.remark() == null ? "未设置" : "详情";
            
            //个人名称
            var userlogno = _user.userlogno() == null ? "未设置" : _user.userlogno();
            
            self.setCellDetailArray([userlogno, userGender, userIntro, ""]);
            
            self.userTableView().reloadData();
            },
            });
