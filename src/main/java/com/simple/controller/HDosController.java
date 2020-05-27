package com.simple.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.simple.model.Coche;
import com.simple.model.AjaxDomain;
import com.simple.repository.CochesRepository;

@RestController
public class HDosController {

	@Autowired
	CochesRepository cochesServicio;

	AjaxDomain ajaxDomain;

	@PostMapping(value = "coches/search")
	Coche getCoches(@Valid @RequestBody AjaxDomain search) {

		return cochesServicio.findById(search.getId()).get();
	}

	@RequestMapping(value = "coches/all", method = RequestMethod.POST)
	List<Coche> getAllCoches() {

		return cochesServicio.findAll();
	}

}
