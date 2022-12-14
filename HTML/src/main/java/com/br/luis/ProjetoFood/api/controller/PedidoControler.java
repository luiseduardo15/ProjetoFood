/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.br.luis.ProjetoFood.api.controller;

/**
 *
 * @author devsys-b
 */

import com.br.luis.ProjetoFood.domain.model.Pedido;
import com.br.luis.ProjetoFood.domain.repository.PedidoRepository;
import com.br.luis.ProjetoFood.domain.service.PedidoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;


/**
 *
 * @author devsys-b
 */
@Controller
public class PedidoControler {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private PedidoService pedidoService;

    @GetMapping("/listar")
    public List<Pedido> listar() {
        return pedidoRepository.findAll();
    }
    
    @PostMapping("/teste")
    @ResponseStatus(HttpStatus.CREATED)
    public Pedido criar(@RequestBody Pedido pedido){
        return pedidoService.criar(pedido);
    }

}
