package org.linlinjava.litemall.db.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.linlinjava.litemall.db.domain.LitemallOrg;
import org.linlinjava.litemall.db.domain.LitemallOrgExample;

public interface LitemallOrgMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    long countByExample(LitemallOrgExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    int deleteByExample(LitemallOrgExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    int insert(LitemallOrg record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    int insertSelective(LitemallOrg record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    LitemallOrg selectOneByExample(LitemallOrgExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    LitemallOrg selectOneByExampleSelective(@Param("example") LitemallOrgExample example, @Param("selective") LitemallOrg.Column ... selective);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    List<LitemallOrg> selectByExampleSelective(@Param("example") LitemallOrgExample example, @Param("selective") LitemallOrg.Column ... selective);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    List<LitemallOrg> selectByExample(LitemallOrgExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    LitemallOrg selectByPrimaryKeySelective(@Param("id") Integer id, @Param("selective") LitemallOrg.Column ... selective);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    LitemallOrg selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    LitemallOrg selectByPrimaryKeyWithLogicalDelete(@Param("id") Integer id, @Param("andLogicalDeleted") boolean andLogicalDeleted);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    int updateByExampleSelective(@Param("record") LitemallOrg record, @Param("example") LitemallOrgExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    int updateByExample(@Param("record") LitemallOrg record, @Param("example") LitemallOrgExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(LitemallOrg record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(LitemallOrg record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    int logicalDeleteByExample(@Param("example") LitemallOrgExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table litemall_org
     *
     * @mbg.generated
     */
    int logicalDeleteByPrimaryKey(Integer id);
}