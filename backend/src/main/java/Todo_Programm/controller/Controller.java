package Todo_Programm.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "${ToDo-App.frontend.url}")
public class Controller {
	
	@GetMapping(value = "/hello", produces = MediaType.TEXT_PLAIN_VALUE)
	public String sayHelloWorld() {
		return ("Hello World!");
	}

}
