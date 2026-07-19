package Todo_Programm.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "${ToDo-App.frontend.url}")
public class LoginController {
	
	@PostMapping
	public boolean login(@RequestParam String username, @RequestParam String password) {
		return "user".equals(username) && "password".equals(password);
	}

}
