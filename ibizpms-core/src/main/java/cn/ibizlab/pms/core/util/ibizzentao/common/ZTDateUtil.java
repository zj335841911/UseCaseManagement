package cn.ibizlab.pms.core.util.ibizzentao.common;

import cn.ibizlab.pms.core.zentao.domain.Story;
import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;

@Slf4j
public class ZTDateUtil {

    private static ZTDateUtil instance = new ZTDateUtil();

    public static Timestamp nul(){
       return null;
    }

    public static  Timestamp now(){
        return new Timestamp(System.currentTimeMillis()) ;
    }

    public static ZTDateUtil getInstance(){
        return instance;
    }




}
