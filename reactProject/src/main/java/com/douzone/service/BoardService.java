package com.douzone.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.douzone.entity.Board;
import com.douzone.mappers.BoardDAO;

@Service
public class BoardService {
	@Autowired
	BoardDAO boardDAO;

	public ArrayList<Board> boardList() {
		
		return boardDAO.boardList();
	}

	public Board boardDetail(String seq) {
		// TODO Auto-generated method stub
		return boardDAO.boardDetail(seq);
	}



	public int boardUpdate(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return boardDAO.boardUpdate(map);
	}

	public int boardDelete(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return boardDAO.boardDelete(map);
	}

	public int boardAdd(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return boardDAO.boardAdd(map);
	}
}
