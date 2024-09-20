package com.ds.apiRest.controllers;

import com.ds.apiRest.entities.Persona;
import com.ds.apiRest.services.PersonaService;
import com.ds.apiRest.services.PersonaServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*") //indica que se puede acceder desde distintos origenes a nuestra api
@RequestMapping(path = "api/v1/personas") //indicamos la ruta a la api

public class PersonaController extends BaseControllerImpl<Persona, PersonaServiceImpl>{


}
