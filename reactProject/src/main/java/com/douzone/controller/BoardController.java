package com.douzone.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.entity.Board;
import com.douzone.service.BoardService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/board")
public class BoardController {
	@Autowired
	BoardService boardService;
	
	@GetMapping(value = "/BoardList.do")
	@ResponseBody
	public Map<String, Object> login() {
		Map<String, Object> jsonResult = new HashMap<String, Object>();
	
		ArrayList<Board> boardList= boardService.boardList();
		if (boardList != null) {
			jsonResult.put("status", true);
			jsonResult.put("boardList", boardList);

		} else {
			jsonResult.put("status", false);
			jsonResult.put("message", "게시글이 없습니다.");
		}
		System.out.println("list " + boardList);
		return jsonResult;
	}
	
	@PostMapping(value = "/BoardDetail.do")
	@ResponseBody
	public Map<String, Object> boardDetail(@RequestBody HashMap<String, Object> map ) {
		Map<String, Object> jsonResult = new HashMap<String, Object>();
	
		Board board= boardService.boardDetail((String) map.get("seq"));
		if (board != null) {
			jsonResult.put("status", true);
			jsonResult.put("board", board);

		} else {
			jsonResult.put("status", false);
			jsonResult.put("message", "오류 발생");
		}

		return jsonResult;
	}
	
	@PutMapping(value = "/BoardUpdate.do")
	@ResponseBody
	public Map<String, Object> boardUpdate(@RequestBody HashMap<String, Object> map ) {
		Map<String, Object> jsonResult = new HashMap<String, Object>();
	
		int result = boardService.boardUpdate(map);
		if (result != 0) {
			jsonResult.put("status", true);
			jsonResult.put("message", "수정완료");
		} else {
			jsonResult.put("status", false);
			jsonResult.put("message", "비밀번호 불일치");
		}

		return jsonResult;
	}
	
	@DeleteMapping(value = "/BoardDelete.do")
	@ResponseBody
	public Map<String, Object> boardDelete(@RequestBody HashMap<String, Object> map ) {
		Map<String, Object> jsonResult = new HashMap<String, Object>();
	
		int result = boardService.boardDelete(map);
		if (result != 0) {
			jsonResult.put("status", true);
			jsonResult.put("message", "삭제완료");
		} else {
			jsonResult.put("status", false);
			jsonResult.put("message", "비밀번호 불일치");
		}

		return jsonResult;
	}
	
	@PostMapping(value = "/BoardAdd.do")
	@ResponseBody
	public Map<String, Object> boardAdd(@RequestBody HashMap<String, Object> map ) {
		Map<String, Object> jsonResult = new HashMap<String, Object>();
	
		int result = boardService.boardAdd(map);
		if (result != 0) {
			jsonResult.put("status", true);
			jsonResult.put("message", "글작성완료");
		} else {
			jsonResult.put("status", false);
			jsonResult.put("message", "오류발생");
		}

		return jsonResult;
	}
}
