package org.linlinjava.litemall.db.service;

import com.github.pagehelper.PageHelper;
import org.linlinjava.litemall.db.dao.LitemallOrgMapper;
import org.linlinjava.litemall.db.domain.LitemallOrg;
import org.linlinjava.litemall.db.domain.LitemallOrgExample;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class LitemallOrgService {

    @Resource
    LitemallOrgMapper litemallOrgMapper;

    public int add(LitemallOrg litemallOrg){
        litemallOrg.setAddTime(LocalDateTime.now());
        litemallOrg.setUpdateTime(LocalDateTime.now());
        return litemallOrgMapper.insertSelective(litemallOrg);
    }

    public LitemallOrg findById(Integer id) {
        return litemallOrgMapper.selectByPrimaryKey(id);
    }

    public List<LitemallOrg> queryByOrderStatus(Integer type, Integer page, Integer limit, String sort, String order) {
        LitemallOrgExample example = new LitemallOrgExample();
        example.setOrderByClause(LitemallOrg.Column.addTime.desc());
        LitemallOrgExample.Criteria criteria = example.or();
        criteria.andTypeEqualTo(type);
        criteria.andDeletedEqualTo(false);
        if (!StringUtils.isEmpty(sort) && !StringUtils.isEmpty(order)) {
            example.setOrderByClause(sort + " " + order);
        }

        PageHelper.startPage(page, limit);
        return litemallOrgMapper.selectByExample(example);
    }

}
