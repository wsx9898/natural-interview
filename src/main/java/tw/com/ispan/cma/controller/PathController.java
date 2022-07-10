package tw.com.ispan.cma.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PathController {
	//這個是測thymeleaf的
//	@RequestMapping(path = {"/"})
//	public String handlerMethod1() {
//		return "/index";
//	}

//	//跟上面不能共存，這個是測JSP的
	@RequestMapping(path = {"/"})
	public String handlerMethod11() {
		return "/index";
	}
	@RequestMapping(path = "/secure/login.view")
	public String handlerMethod2() {
		return "secure/login";
	}


	@RequestMapping(value = "/pages/register/registerForm.view")
	public String handlerMethod3() {
		return "/pages/register/registerForm";
	}


	@RequestMapping("/EndProject/KevinProductInfo.view")
	public String handlerMethod4() {
		return "KevinProductInfo";
	}


	@RequestMapping("/EndProject/KevinNewCart.view")
	public String handlerMethod5() {
		return "KevinNewCart";
	}

	@RequestMapping("/registerFormHTML.view")
	public String handlerMethod6(){ return "registerForm"; }

	@RequestMapping("/KevinDashBoard.view")
	public String handlerMethod7(){ return "KevinDashBoard"; }


	@RequestMapping(path = "loginKevin.view")
	public String handlerMethod21() {
		return "loginKevin";
	}

	@RequestMapping(path = "/secure/loginTony.view")
	public String handlerMethod22() {
		return "loginTony";
	}


	@RequestMapping(path = "th_interview.view")
	public String handlerMethod30() {
		return "th_interview";
	}
//Thymeleaf每次都要去SpringMVCJavaConfig額外標註


}
