package tw.com.ispan.cma.service;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tw.com.ispan.cma.dao.CustomerDAO;
import tw.com.ispan.cma.domain.CustomerBean;

@Service
@Transactional
public class CustomerService {
	@Autowired
	private CustomerDAO customerDao;
	
	@Transactional(readOnly = true)
	public CustomerBean login(String username, String password) {
		CustomerBean bean = customerDao.select(username);
		if(bean!=null) {
			if(password!=null && password.length()!=0) {
				byte[] pass = bean.getPassword();
				byte[] temp = password.getBytes();
				if(Arrays.equals(pass, temp)) {
					return bean;
				}
			}
		}
		return null;
	}
	public boolean changePassword(String username, String oldPassword, String newPassword) {
		CustomerBean bean = this.login(username, oldPassword);
		if(bean!=null) {
			byte[] temp = newPassword.getBytes();
			return customerDao.update(temp, bean.getEmail(), bean.getBirth(), username);
		}
		return false;
	}
}
