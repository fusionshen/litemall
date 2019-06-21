package org.linlinjava.litemall.wx.service;

import org.linlinjava.litemall.db.domain.LitemallOrg;
import org.linlinjava.litemall.db.service.LitemallOrgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WxOrgService {

    @Autowired
    LitemallOrgService litemallOrgService;

    public Object listByType(Integer type, Integer page, Integer limit, String sort, String order){
        List<LitemallOrg> litemallOrgs = litemallOrgService.queryByOrgType(type, page, limit, sort, order);


        return litemallOrgs;
    }

    public Object detail(Integer id){
        return litemallOrgService.findById(id);
    }
}
