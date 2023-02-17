package com.douzone.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.entity.Member;
import com.douzone.service.MemberService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/member")
public class MemberController {

	@Autowired
	MemberService memberService;

	@PostMapping(value = "/login.do")
	@ResponseBody
	public Map<String, String> login(@RequestBody HashMap<String, String> map, HttpSession session) {
		Map<String, String> jsonResult = new HashMap<String, String>();
	
		Member member = memberService.login(map);
		if (member != null) {
			jsonResult.put("status", "true");
			jsonResult.put("url", "/");
			jsonResult.put("message", "로그인 성공");
			jsonResult.put("userName", member.getName());
			session.setAttribute("member", member);
			session.setAttribute("isLogin", true);
			session.setAttribute("userName", member.getName());
		} else {
			jsonResult.put("status", "false");
			jsonResult.put("url", "/");
			jsonResult.put("message", "로그인 실패");
			session.setAttribute("isLogin", false);
		}
		
		return jsonResult;
	}
	
	@ResponseBody
	@PostMapping(value="/dupIdCheck.do")
	public Map<String, Object> dupUidCheck(@RequestBody HashMap<String, Object> map,
			HttpSession session,
			HttpServletRequest request) {
		Member member = memberService.dupIdCheck((String) map.get("id"));
		
		Map<String, Object> jsonResult = new HashMap<String, Object>();
		
		if (member == null)  {
			jsonResult.put("status", true);
			jsonResult.put("message", "해당 아이디는 사용가능합니다");
		} else {
			jsonResult.put("status", false);
			jsonResult.put("message", "해당 아이디는 사용 불가능합니다");
			
		}
		return jsonResult;
	}
	
	
	
	@PostMapping(value="/addMember.do") @ResponseBody
	public Map<String, Object> addMember(@RequestBody HashMap<String, Object> map,
			HttpSession session,
			HttpServletRequest request) {
		
		int result =0;
		result= memberService.addMember(map);
		Map<String, Object> jsonResult = new HashMap<String, Object>();
		if (result == 0) {
			jsonResult.put("status", false);
			jsonResult.put("message", "가입실패");
		} else {
			jsonResult.put("status", true);
			jsonResult.put("message", "가입성공");
		}
		return jsonResult;
	}
}
