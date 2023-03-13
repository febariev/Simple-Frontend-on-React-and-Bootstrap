import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor () {
        this._types = [
            {id: 1, name: 'Микроволновка'},
            {id: 2, name: 'Электропечь'},
            {id: 3, name: 'Смартфон'},
            {id: 4, name: 'Ноутбук'}
        ]
        this._brands = [
            {id: 1, name: 'LG'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Apple'},
            {id: 4, name: 'Acer'}
        ]
        this._devices = [
            {id: 1, name: 'Super LGX3986148', price: 4900000, rating: 5, img: '56230812-08e6-460e-af29-28beebd4c45b.jpg'},
            {id: 4, name: 'RF12309', price: 6700000, rating: 5, img: 'b1357af3-cf7b-41df-9e2d-160e020b0d40.jpg'},
            {id: 5, name: 'Iphone 14 PRO Max', price: 15000000, rating: 5, img: 'f6f5661d-e96e-43e2-93d2-e5ec60e89f3f.jpg'},
            {id: 6, name: 'Galaxy S23', price: 12000000, rating: 5, img: 'bf5b57b9-3748-4073-835a-db952d0cb9ef.jpg'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}