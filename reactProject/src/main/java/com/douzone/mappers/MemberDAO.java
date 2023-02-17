package com.douzone.mappers;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.douzone.entity.Member;

@Repository
@Mapper
public interface MemberDAO {
	public Member selectId(String id);
	public int addMember(Map<String, Object> map);
//	public int deleteMember(String member_id);
}
