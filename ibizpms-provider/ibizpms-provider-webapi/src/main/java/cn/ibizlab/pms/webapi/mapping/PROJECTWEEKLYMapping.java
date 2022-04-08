package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.report.domain.PROJECTWEEKLY;
import cn.ibizlab.pms.webapi.dto.PROJECTWEEKLYDTO;
import cn.ibizlab.pms.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "WebApiPROJECTWEEKLYMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface PROJECTWEEKLYMapping extends MappingBase<PROJECTWEEKLYDTO, PROJECTWEEKLY> {


}

