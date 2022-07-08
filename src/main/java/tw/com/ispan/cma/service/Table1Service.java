package tw.com.ispan.cma.service;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import tw.com.ispan.cma.dao.Table1DAO;
import tw.com.ispan.cma.domain.Table1Bean;


import java.util.ArrayList;
import java.util.List;

@Component
@Transactional
public class Table1Service {
    @Autowired
    private Table1DAO table1DAO;

    private Base64 base64 = new Base64();


    public List<Table1Bean> select(Table1Bean bean){
        List<Table1Bean> result = null;
        List<Table1Bean> returnResult = null;

        //!!!!如果只拿特定的還是會改到資料庫
        //這邊是指定拿到特定的一個bean
        if(bean!=null && bean.getIdx()!=null && !bean.getIdx().equals(0)){
            Table1Bean temp = table1DAO.select(bean.getIdx());
            if(temp!=null){
                returnResult = new ArrayList<Table1Bean>();

                //把加密過的先取出來解密再放回去
                temp.setBase64(new String(base64.decode(temp.getBase64().getBytes())));
                returnResult.add(temp);
            }
        //這邊會取得所有的beans
        }else {
            result = table1DAO.select();

            //在這層把base64解密，再把他取代原本的
            for(Table1Bean ele:result){
                var encryptedStr = ele.getBase64();
                String decryptedStr = new String(base64.decode(encryptedStr.getBytes()));
                //這邊拿到的bean依然跟資料庫連線?setBase64也會影響到資料庫裡面的bean?
                ele.setBase64(decryptedStr);

                returnResult.add(ele);
            }
        }
        return returnResult;
    }

    public Table1Bean insert(Table1Bean bean){
        Table1Bean result = null;
        if(bean!=null){
            System.out.println(bean.getIdx() + " from Table1 service");
            result = table1DAO.insert(bean);
        }
        return result;
    }

}
