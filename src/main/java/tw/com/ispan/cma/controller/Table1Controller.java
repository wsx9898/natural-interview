package tw.com.ispan.cma.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tw.com.ispan.cma.domain.Table1Bean;
import tw.com.ispan.cma.service.Table1Service;


@RestController
@CrossOrigin
public class Table1Controller {
    @Autowired
    private Table1Service table1Service;


    @GetMapping(path = {"/getAllData"})
    public ResponseEntity getAllData() {
        System.out.println("Controller有被呼叫到");
        Table1Bean bean = new Table1Bean();
        bean.setIdx(0);

        var res = table1Service.select(bean);
        if (res != null) {
            return ResponseEntity.ok(res.toString());
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(path = {"/getOneData"})
    public ResponseEntity getOneData() {
        System.out.println("Controller有被呼叫到");
        Table1Bean bean = new Table1Bean();
        bean.setIdx(1);

        var res = table1Service.select(bean);
        if (res != null) {
            return ResponseEntity.ok(res.toString());
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}
