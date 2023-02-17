package com.douzone.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.douzone.entity.Member;
import com.douzone.mappers.MemberDAO;

@Service
public class MemberService {
	@Autowired
	MemberDAO memberDAO;
	
	public Member login(Map<String, String> map) {
		Member member = memberDAO.selectId(map.get("id"));
	
		if (member != null && member.getPasswd().equals(map.get("passwd")) ) {
			return member;
		}
		
		return null;
	}

	public Member dupIdCheck(String id) {
		// TODO Auto-generated method stub
		return memberDAO.selectId(id);
	}
	
	

	public int addMember(HashMap<String, Object> map) {
		return  memberDAO.addMember(map);
	}


}
