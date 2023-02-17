package com.douzone.mappers;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.douzone.entity.Board;

@Repository
@Mapper
public interface BoardDAO {

	public ArrayList<Board> boardList();
	public Board boardDetail(String seq);
	public int boardUpdate(HashMap<String, Object> map);
	public int boardDelete(HashMap<String, Object> map);
	public int boardAdd(HashMap<String, Object> map);

}
