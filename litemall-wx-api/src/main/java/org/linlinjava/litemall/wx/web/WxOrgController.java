package org.linlinjava.litemall.wx.web;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.linlinjava.litemall.core.util.ResponseUtil;
import org.linlinjava.litemall.core.validator.Order;
import org.linlinjava.litemall.core.validator.Sort;
import org.linlinjava.litemall.wx.service.WxOrgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/wx/org")
@Validated
public class WxOrgController {
    private final Log logger = LogFactory.getLog(WxOrgController.class);

    @Autowired
    WxOrgService wxOrgService;

    /**
     * 机构列表
     * @param type 机构类型
     * @param page 页码
     * @param limit 每页条数
     * @param sort 排序字段
     * @param order 排序方法
     * @return
     */
    @GetMapping(value = {"list"})
    public Object list(@RequestParam(defaultValue = "0") Integer type,
                       @RequestParam(defaultValue = "1") Integer page,
                       @RequestParam(defaultValue = "10") Integer limit,
                       @Sort @RequestParam(defaultValue = "add_time") String sort,
                       @Order @RequestParam(defaultValue = "desc") String order){
        return ResponseUtil.ok(wxOrgService.listByType(type, page, limit, sort, order));
    }


    /**
     * 机构详情
     * @param id 机构ID
     * @return
     */
    @GetMapping("detail")
    public Object detail(@NotNull Integer id) {
        return ResponseUtil.ok(wxOrgService.detail(id));
    }
}
