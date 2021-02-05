import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AddressCommonEntity } from './commonEntity';

@Entity('country')
export class CountryEntity extends AddressCommonEntity {}

@Entity('province')
export class ProvinceEntity extends AddressCommonEntity {}

@Entity('city')
export class CityEntity extends AddressCommonEntity {}

@Entity('district')
export class DistrictEntity extends AddressCommonEntity {}

// 地区表，国家--省--市-区县 多主键
@Entity('address')
export class AddressEntity {
  // 主键
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  // 国家
  @OneToOne((type) => CountryEntity)
  @JoinColumn()
  country: CountryEntity;

  // 省份
  @OneToOne((type) => ProvinceEntity)
  @JoinColumn()
  province: ProvinceEntity;

  // 城市
  @OneToOne((type) => CityEntity)
  @JoinColumn()
  city: CityEntity;

  // 区县
  @OneToOne((type) => DistrictEntity)
  @JoinColumn()
  area: DistrictEntity;
}
