import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

//1、导入Realm
const Realm = require('realm');
//2、定义数据模型
const PersonSchema = {
  name: 'Person',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    name: 'string',
    age: { type: 'int', default: 26 },
  }
};


export default class RealmDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultContent: '操作结果显示',
    }
  }


  static navigationOptions = {
    title: 'Realm学习',
  }

  render() {
    //3、初始化Realm、数据模型
    let realm = new Realm({
      schema: [PersonSchema],
      path: 'test.realm',//不指定则默认为default.realm
    });
    // this.setState({
    //   resultContent: '数据库版本:' + realm.schemaVersion,
    // });
    return (
      <ScrollView style={styles.welcome}>

        <TouchableOpacity
          onPress={() => this.insertDatas(realm)}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>插入数据</Text></View>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => {
            //更新id = 1名称为张三
            realm.write(() => {
              try {
                //方式一
                //let p = realm.objectForPrimaryKey('Person', 1);//按主键进行查找
                //p.name = '张三';

                //方式二
                realm.create('Person', { id: 1, name: '张三' }, true);

                this.setState({
                  resultContent: '更新成功',
                });
              } catch (e) {
                this.setState({
                  resultContent: e.toString(),
                });
              }

            });
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>更新id = 1名称为张三</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            //查询name=张三的数据
            let p = realm.objects('Person').filtered('name = "张三"');
            this.setState({
              resultContent: JSON.stringify(p),
            });
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>查询name=张三的数据</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            //查询id = 3的数据
            let p = realm.objects('Person').filtered('id = 3');
            this.setState({
              resultContent: JSON.stringify(p),
            });
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>查询id = 3的数据</Text></View>
        </TouchableOpacity>



        <TouchableOpacity
          onPress={() => {
            //根据Id排序查询前4条数据
            let persons = realm.objects('Person').sorted('id').slice(0, 4);
            this.setState({
              resultContent: JSON.stringify(persons),
            });
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>根据Id排序查询前4条数据</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            //根据Id排序查询后4条数据
            let persons = realm.objects('Person').sorted('id', true).slice(0, 4);
            this.setState({
              resultContent: JSON.stringify(persons),
            });
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>根据Id排序查询后4条数据</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            //查询所有数据
            let persons = realm.objects('Person').sorted('id', true);
            this.setState({
              resultContent: JSON.stringify(persons) + '\n数据条数:' + persons.length,
            })
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>查询所有数据(按Id倒序排序)</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            //查询所有名字以user开头的数据
            let persons = realm.objects('Person').filtered('name BEGINSWITH "user"');
            this.setState({
              resultContent: JSON.stringify(persons) + '\n数据条数:' + persons.length,
            })
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>查询所有名字以user开头的数据</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            //查询所有名字中带有bc的数据
            let persons = realm.objects('Person').filtered('name CONTAINS "bc"');
            this.setState({
              resultContent: JSON.stringify(persons) + '\n数据条数:' + persons.length,
            })
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>查询所有名字中带有bc的数据</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            //查询所有名字中以cd结尾的数据
            let persons = realm.objects('Person').filtered('name ENDSWITH "cd"');
            this.setState({
              resultContent: JSON.stringify(persons) + '\n数据条数:' + persons.length,
            })
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>查询所有名字中以cd结尾的数据</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            //删除id = 2的数据
            realm.write(() => {
              try {
                let p = realm.objects('Person').filtered('id = 2');
                realm.delete(p);
                this.setState({
                  resultContent: '删除成功',
                });
              } catch (e) {
                this.setState({
                  resultContent: e.toString(),
                });
              }
            });
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>删除id = 2的数据</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            //删除所有数据
            realm.write(() => {
              try {
                //realm.deleteAll();
                let persons = realm.objects('Person');
                realm.delete(persons);
                this.setState({
                  resultContent: '删除成功',
                });
              } catch (e) {
                this.setState({
                  resultContent: e.toString(),
                });
              }
            });
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>删除所有数据</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            //获取数据库信息
            realm.write(() => {

              this.setState({
                resultContent: "schemaVersion: " + realm.schemaVersion + '\npath: ' + realm.path,
              });

            });
          }}
        >
          <View style={{ backgroundColor: '#00CDCD', padding: 10, alignItems: 'center', marginTop: 5, }}><Text style={{ fontSize: 15, color: 'white' }}>获取数据库信息</Text></View>
        </TouchableOpacity>



        <View style={{ backgroundColor: 'red', padding: 10, alignItems: 'center', marginTop: 10, marginBottom: 10,}}><Text style={{ fontSize: 15, color: 'white' }}>{this.state.resultContent}</Text></View>
      </ScrollView>
    );
  }

  insertDatas(realm){
    //插入数据
    realm.write(() => {
      try {
        realm.create('Person', { id: 1, name: 'username1', age: 22 });
        realm.create('Person', { id: 2, name: 'userabc', age: 22 });
        realm.create('Person', { id: 3, name: 'userbcd', age: 28 });
        realm.create('Person', { id: 4, name: 'usercbcd', age: 22 });
        realm.create('Person', { id: 5, name: 'name5', age: 22 });
        realm.create('Person', { id: 6, name: 'rab6', age: 21 });
        realm.create('Person', { id: 7, name: 'username7' });
        this.setState({
          resultContent: '插入成功',
        });
      } catch (e) {
        this.setState({
          resultContent: e.toString(),
        });
      }

    });
}

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  welcome: {

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});