package com.backend.lawless.controllers;

import com.backend.lawless.dtos.requests.CreateCaffRequest;
import com.backend.lawless.dtos.responses.CreateCaffResponse;
import com.backend.lawless.exceptions.LawlessException;
import com.backend.lawless.services.CaffServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/caff", name = "Caff")
@Api(tags = "Caff")
public class CaffController {

    @Autowired
    CaffServiceImpl caffService;

    @PostMapping(value = "/create")
    @ApiOperation(value = "Create and process caff ", response = CreateCaffResponse.class, nickname = "create")
    public ResponseEntity<?> create(@AuthenticationPrincipal UserDetails userDetails,
                                    @RequestParam("file") MultipartFile caffFile,
                                    @RequestParam("name") String name,
                                    @RequestParam("description") String description,
                                    @RequestParam("price") double price) {
        try {
            return ResponseEntity.ok(caffService.create(userDetails, new CreateCaffRequest(name, description, price, caffFile.getBytes())));
        } catch (LawlessException | IOException e) {
            return ResponseEntity
                    .badRequest()
                    .body(e);
        }
    }
}
