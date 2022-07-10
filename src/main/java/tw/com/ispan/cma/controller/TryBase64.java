package tw.com.ispan.cma.controller;


import org.apache.commons.codec.binary.Base64;

public class TryBase64 {
    public static void main(String[] args) {
        String originalInput = "123456";
        Base64 base64 = new Base64();
        String encodedString = new String(base64.encode(originalInput.getBytes()));
        System.out.println("encoded = "+encodedString);

        var str99 = "eyJrZXkiOiJOYXR1cmFsdGVsIiwidmFsdWUiOiLmuKzoqabos4fmlpkifQ==";
        String decodedString = new String(base64.decode(str99.getBytes()));
        System.out.println("decoded = "+ decodedString);


        var str0 = "{\"key\":\"Naturaltel\",\"value\":\"測試資料\"}";
        var base = new Base64();
        String str1 = new String(base.encode(base.encode(str0.getBytes())));
        System.out.println(str1);
        var decodeStr = new String(base.decode(str1.getBytes()));
        var ddecode = new String(base.decode(decodeStr.getBytes()));
        System.out.println(ddecode);
    }

}
