package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
import cn.ibizlab.pms.webapi.dto.IBIZPRO_INDEXDTO;
import cn.ibizlab.pms.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "WebApiIBIZPRO_INDEXMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface IBIZPRO_INDEXMapping extends MappingBase<IBIZPRO_INDEXDTO, IBIZPRO_INDEX> {


}

