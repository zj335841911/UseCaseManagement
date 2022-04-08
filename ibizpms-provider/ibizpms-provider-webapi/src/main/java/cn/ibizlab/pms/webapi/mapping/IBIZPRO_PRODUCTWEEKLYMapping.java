package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_PRODUCTWEEKLY;
import cn.ibizlab.pms.webapi.dto.IBIZPRO_PRODUCTWEEKLYDTO;
import cn.ibizlab.pms.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "WebApiIBIZPRO_PRODUCTWEEKLYMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface IBIZPRO_PRODUCTWEEKLYMapping extends MappingBase<IBIZPRO_PRODUCTWEEKLYDTO, IBIZPRO_PRODUCTWEEKLY> {


}

