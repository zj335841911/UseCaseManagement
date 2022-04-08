package cn.ibizlab.pms.webapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.pms.core.ibiz.domain.EmpLoyeeload;
import cn.ibizlab.pms.webapi.dto.EmpLoyeeloadDTO;
import cn.ibizlab.pms.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "WebApiEmpLoyeeloadMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface EmpLoyeeloadMapping extends MappingBase<EmpLoyeeloadDTO, EmpLoyeeload> {


}
