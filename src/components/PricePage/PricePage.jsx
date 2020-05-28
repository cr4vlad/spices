import React from 'react'
import './PricePage.css'

export default function PricePage (props) {
  return (
    <article className='no-hero'>
      <h2>Цены</h2>

      <table className="tableizer-table">
      <thead><tr className="tableizer-firstrow"><th>Наименование</th><th>вход</th><th>Оптовые цены</th><th>&nbsp;</th><th>&nbsp;</th><th>Розница</th></tr></thead><tbody>
      <tr><td>&nbsp;</td><td>&nbsp;</td><td>100 кг</td><td>50 кг</td><td>20 кг</td><td>&nbsp;</td></tr>
      <tr><td>Кундари (чабрец, тимьян)</td><td>200</td><td>217,5</td><td>235</td><td>252,5</td><td>270</td></tr>
      <tr><td>уцхо сунели(пажитник голубой) (молотый)</td><td>110</td><td>137,5</td><td>165</td><td>192,5</td><td>220</td></tr>
      <tr><td>уцхо сунели (пажитник голубой) (семена)</td><td>250</td><td>275</td><td>300</td><td>325</td><td>350</td></tr>
      <tr><td>Хмели сунели</td><td>150</td><td>170</td><td>190</td><td>210</td><td>230</td></tr>
      <tr><td>харчо сунели</td><td>150</td><td>170</td><td>190</td><td>210</td><td>230</td></tr>
      <tr><td>аджика сухая</td><td>140</td><td>155</td><td>170</td><td>185</td><td>200</td></tr>
      <tr><td>сванская соль</td><td>140</td><td>155</td><td>170</td><td>185</td><td>200</td></tr>
      <tr><td>Зира (кумин)</td><td>140</td><td>157,5</td><td>175</td><td>192,5</td><td>210</td></tr>
      <tr><td>Барбарис красный б/к</td><td>300</td><td>330</td><td>360</td><td>390</td><td>450</td></tr>
      <tr><td>Шафран имеретинский</td><td>450</td><td>495</td><td>540</td><td>585</td><td>650</td></tr>
      <tr><td>Лавровый лист (пресованный)</td><td>80</td><td>87,5</td><td>95</td><td>102,5</td><td>110</td></tr>
      <tr><td>Сумах</td><td>150</td><td>167,5</td><td>185</td><td>202,5</td><td>220</td></tr>
      <tr><td>Джонджоли (кваш)</td><td>120</td><td>132</td><td>144</td><td>156</td><td>170</td></tr>
      <tr><td>Перец зеленый (кваш)</td><td>110</td><td>127,5</td><td>145</td><td>162,5</td><td>180</td></tr>
      <tr><td>Тархун (эстрагон)</td><td>280</td><td>297,5</td><td>315</td><td>332,5</td><td>350</td></tr>
      <tr><td>крупа кукурузная</td><td>65</td><td>73,75</td><td>82,5</td><td>91,25</td><td>100</td></tr>
      <tr><td>мука кукурузная</td><td>60</td><td>67,5</td><td>75</td><td>82,5</td><td>90</td></tr>
      </tbody></table>
    </article>
  )
}
